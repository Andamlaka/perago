# Perago Information System
## React Task

### Requirement
Build SPA web application for registering organization's employee hierarchy or structure
1. shall create employee position/role
2. the position should be hierarchical there is a parent child relationship between the positions
  e.g. CEO can be root position no parent and CFO is a child of CEO
3. shall get and list the positions in a tree mode with unlimited n positions
e.g.

        CEO
        ├── CTO
        │   └── Project Manager
        │       └── Product Owner
        │           ├── Tech Lead
        │           │   ├── Frontend Developer
        │           │   ├── Backend Developer
        │           │   ├── DevOps Engineer
        │           │   └── ..
        │           ├── QA Engineer
        │           ├── Scrum Master
        │           └── ...
        ├── CFO
        │   ├── Chef Accountant
        │   │   ├── Financial Analyst
        │   │   └── Account and Payable
        │   └── Internal Audit
        ├── COO
        │   ├── Product Manager
        │   ├── Operation Manager
        │   ├── Customer Relation
        │   └── ...
        └── HR
4. shall click on the list and get one of employee positions and update/delete it
5. Model (you can update this model if needed)
    | Column      |    Type     |
    |-------------|-------------|
    | id          | int         |
    | name        | string      |
    | description | string      |
    | parentId    | in          |
6. The app shall have routing, api call, state management(desirable),
7. The app shall have interactive page layout (Good UI/UX)
8. The forms in the app should be [Rect Hook Form](https://www.react-hook-form.com/) and have validation

### Resources to use (Required)
- Framework [Mantine](https://mantine.dev/)
- Styles [TailwindCss](https://tailwindcss.com/)
- State Management [Redux Toolkit](https://redux-toolkit.js.org/)
- Validation [Yub](https://www.npmjs.com/package/yup) - Not Mandatory
- Http request [Axios](https://github.com/axios/axios)
- From [React Hook Form](https://www.react-hook-form.com/)
- Use REST apis from [Firebase Database REST API](https://firebase.google.com/docs/reference/rest/database) or [Mockoon](https://mockoon.com/) or any other mock api

### Extra Resources
- [Lodash](https://lodash.com/docs/)
- [NextJs](https://nextjs.org/) (Not Installed)

NOTE: You can install any libraries if needed.
The above libraries are already on the project (just npm install)