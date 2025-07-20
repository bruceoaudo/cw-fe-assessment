## Changes made

###[TagList component]

1. TagList component in line 9

   - Issue: The TAgList component props do not have a type defined
   - Fix: Created a types.d.ts file in the source folder, created a TagListProps type and exported it. Then added the type to the TagList props

2. tags.map() function in line 14
   - Issue: The map function only had a tag argument that was being used as a key
   - Fix: Added an index argument and used it as a key

###[Header component]

1. The Input element in line 97

   - Issue: The value of the input is set to "search"
   - Fix: Changed the attribute from value to placeholder

2. The style attribute of the div in line 89

   - Issue: The style attribute is being used instead of a tailwind className for styling
   - Fix: Replaced the style attribute with a tailwind className for styling

3. The Avatar component in line 103

   - Issue: The style attribute is being used instead of a tailwind className for styling
   - Fix: Replaced the style attribute with a tailwind className for styling

4. The search div in line 89

   - Issue: The Search icon was not centered vertically in the input
   - Fix: Removed all the spans, removed the relative and absolute styling. Make the whole div flex and items-center to center all the children(The search icon and input element), i changed the width and border radius to match the design

5. The logo img in line 84

   - Issue: The img is larger that that on the design
   - Fix: I made the img smaller to match that of the design. I also made the name bolder and larger to match the design

6. The Header component in line 82

   - Issue: The padding in the mobile view is large
   - Fix: Reduce the padding in mobile view

   - Issue: the search input is taking too much space in mobile view
   - Fix: Made it hidden in mobile view and only left the search icon
   - Fix: Made the search area div transaparent in mobile view
   - Fix: Made two search icons, one will be visible in mobile view and the other in all other views. the mobile view icon has a useState hook attached to it to determine when it is clicked

###[BoxArea108 component]

1. The div in line 64

- Issue: The border-radius was fully rounded yet in the design its not
- Fix: Changed the border radius from fully rounded to medium

2. The input in line 66
   - Issue: On focus, the outline is thick
   - Fix: I have removed the outline and border on focus. I have used the ! important declarative to make sure the styles overwrite the default shadcn input styles
