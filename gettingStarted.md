# Get Started

## Changing Content

### Text & Data

You can change the placeholder text in the respective components within `./sections`
Data in regards to navigation, projects, skills, etc. can be changed within `./sections/projectData.tsx`

### Adding New Sections

To add new Sections you can copy and rename the template file within `./sections` and add your own content.
Add, remove, rearrange sections inside `<main></main>` tags within `.pages/index.tsx`.

## Module Paths

Lastly, for convenience I've added module path alias. If you are importing a file you can simple reference it's path as such,`'@components/YourComponent'`. No more ugly relative paths. This option can be configured in the "paths" object within the tsconfig file.
