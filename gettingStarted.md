# Get Started

## Adding and Editing Content
You can change the placeholder text in the respective components within ./sections

Data in regards to navigation, projects, or skills can be changed withing ./sections/projectData.tsx

To add new Sections you can copy and rename the template file within ./sections and add your content.

Don't forget to add it inside .pages/index.tsx and the order that it renders.

Lastly, for convenience I've added module path alias. If you are importing a file you can simple reference it's path as such,'@components/YourComponent'. No more ugly relative paths. This option can be configured in the "paths" object within the tsconfig file.