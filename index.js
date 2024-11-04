import { unified } from 'unified'
import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { getInput } from '@actions/core'
import $ from 'google-translate-api'
import parse from 'remark-parse'
import stringify from 'remark-stringify'
import visit from 'unist-util-visit'
import simpleGit from 'simple-git'
const git = simpleGit()

const toAst = markdown => {
  return unified().use(parse).parse(markdown)
}

const toMarkdown = ast => {
  return unified().use(stringify).stringify(ast)
}

const mainDir = '.'
let README = readdirSync(mainDir).includes('readme.md')
  ? 'readme.md'
  : 'README.md'
const lang = getInput('LANG') || 'zh-CN'
const readme = readFileSync(join(mainDir, README), { encoding: 'utf8' })
const readmeAST = toAst(readme)
console.log('AST CREATED AND READ')

let originalText = []

visit(readmeAST, async node => {
  try {
    if (node.type === 'text') {
      console.log('node.value: ', node.value)
      originalText.push(node.value)
      node.value = (await $(node.value, { to: lang })).text
    }
  } catch (error) {
    console.log('visit error: ', error)
    // throw new Error(error)
  }
})

const translatedText = originalText.map(async text => {
  return (await $(text, { to: lang })).text
})

async function writeToFile () {
  try {
    await Promise.all(translatedText)
    writeFileSync(
      join(mainDir, `README.${lang}.md`),
      toMarkdown(readmeAST),
      'utf8'
    )
    console.log(`README.${lang}.md written`)
  } catch (error) {
    console.log('writeToFile error: ', error)
    // throw new Error(error)
  }
}

async function commitChanges (lang) {
  try {
    console.log('commit started')
    await git.add('./*')
    await git.addConfig('user.name', 'github-actions[bot]')
    await git.addConfig(
      'user.email',
      'github-actions[bot]@users.noreply.github.com'
    )
    await git.commit(
      `docs: Added README."${lang}".md translation via https://github.com/dephraiim/translate-readme`
    )
    console.log('finished commit')
    await git.push()
    console.log('pushed')
  } catch (error) {
    console.log('commitChanges error: ', error)
    // throw new Error(error)
  }
}

async function translateReadme () {
  try {
    await writeToFile()
    await commitChanges(lang)
    console.log('Done')
  } catch (error) {
    console.log('translateDocumentation error: ', error)
    // throw new Error(error)
  }
}

translateReadme()
