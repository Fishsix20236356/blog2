# Personal Blog Implementation Guide

## Step 1: Set Up Project Structure

1. Create the folder structure as shown in the Personal Blog Structure document
2. Download required libraries:
   - [particles.js](https://github.com/VincentGarreau/particles.js/) - Save as `js/particles.min.js`
   - [marked.js](https://github.com/markedjs/marked) - Save as `js/marked.min.js`

## Step 2: Create Base Files

1. Create `index.html` using the provided template
2. Create CSS files:
   - `css/style.css` - Main styling
   - `css/particles.css` - Particle background styling
3. Create JS files:
   - `js/particles-config.js` - Configuration for particles

## Step 3: Create Blog Post Templates and Content

1. Create a blog post template called `post-template.html`
2. For each blog post:
   - Copy `post-template.html` to `posts/post1.html`, `posts/post2.html`, etc.
   - Create corresponding markdown files in the `markdown` folder

## Step 4: How the Blog Works

### Homepage (index.html)
- Displays a list of blog post previews with borders
- Each preview contains a title, date, excerpt, and "Read More" link
- Background uses particles.js for dynamic effects

### Blog Post Pages
- Load and render markdown content using the marked.js library
- Extract title and date from the markdown file
- Include a navigation link back to the homepage
- Share the same particle background effect

### Markdown Support
The system automatically converts markdown to HTML using marked.js. Your markdown files should follow this format:

```markdown
# Title of the Blog Post
YYYY-MM-DD (date)

Content starts here...

## Subheadings work

*Italic*, **bold**, and `code` formatting works too.

```

## Step 5: Customization Options

### Changing Particle Effects
Modify the `particles-config.js` file to change:
- Number and density of particles
- Colors and shapes
- Animation speed and interactivity

### Styling
Edit `style.css` to change:
- Color scheme
- Card/border styles
- Typography
- Layout spacing

### Adding New Posts
1. Create a new markdown file in the `markdown` folder
2. Copy an existing post HTML file and update the filename
3. Add a new blog card to `index.html`

## Step 6: Testing and Deployment

1. Test locally by opening `index.html` in a browser
2. To deploy, upload all files to any static web hosting:
   - GitHub Pages
   - Netlify
   - Vercel
   - Any web hosting that supports static files

## Limitations and Considerations

- This is a static site with no backend, so there's no dynamic content generation
- Adding new posts requires manually updating HTML files
- For a more automated approach, consider static site generators like Jekyll or Eleventy

## Future Enhancements

- Add search functionality with JavaScript
- Implement tags/categories
- Add dark/light mode toggle
- Implement pagination for many blog posts