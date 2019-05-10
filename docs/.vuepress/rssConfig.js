const path = require('path')
const RSS = require('rss')
const chalk = require('chalk')
const markit=require('markdown-it')

module.exports = (pluginOptions, ctx) => {
  return {
    name: 'rss',
    
    generated () {
      const fs = require('fs-extra')
        var md=new markit().use(require('markdown-it-abbr'))
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-task-lists'))
        .use(require('markdown-it-mark'))
        .use(require('markdown-it-katex'))
        .use(require('markdown-it-sup'))
        .use(require('markdown-it-sub'))
        .use(require('markdown-it-plantuml'))
        .use(require("markdown-it-container"), "tip")
      .use(require("markdown-it-container"), "warning")
      .use(require("markdown-it-container"), "danger")
      .use(require("markdown-it-highlightjs"))
      .use(require("markdown-it-meta"));
      const { pages, sourceDir } = ctx
      const { filter = () => true, count = 20 } = pluginOptions
      const siteData = require(path.resolve(sourceDir, '.vuepress/config.js'))

      const feed = new RSS({
        title: siteData.title,
        description: siteData.description,
        feed_url: `${pluginOptions.site_url}/rss`,
        site_url: `${pluginOptions.site_url}`,
        copyright: `${pluginOptions.copyright ? pluginOptions.copyright : 'Richasy 2019'}`,
        language: 'zh',
      })
      pages
        .filter(page => String(page.frontmatter.type).toLowerCase() === 'post')
        .filter(page => filter(page.frontmatter))
        .map(page => ({...page, date: new Date(page.frontmatter.date || '')}))
        .sort((a, b) => b.date - a.date)
        .map(page => ({
          title: page.frontmatter.title,
          description: md.render(page._content),
          url: `${pluginOptions.site_url}${page.path}`,
          date: page.date,
        }))
        .slice(0, count)
        .forEach(page => feed.item(page))

      fs.writeFile(
        path.resolve(ctx.outDir, 'rss.xml'),
        feed.xml()
      );
      console.log(chalk.green.bold('RSS has been generated!'))
    }
  }
}