# SmartReact

**TypeScript React + Material-UI + etsoo-react template project working with SmartERP APIs.** Done by Garry Xiao, in order to reduce SmartERP 5 integration App's double work.

- @etsoo/shared installed. It's a shared package across all JS packages: https://github.com/ETSOO/Shared
- etsoo-react installed. It's the core and major React package to support all React projects : https://github.com/ETSOO/etsoo-react
- @etsoo/notificationmu installed: https://github.com/ETSOO/NotificationMU
- yup, @types/yup for form validation (/etsoo-react/src/uses/useFormValidator.ts): https://github.com/jquense/yup
- react-router-dom, @types/react-router-dom for router: https://reactrouter.com/web/guides/quick-start

## Installing

```bash
git clone https://github.com/ETSOO/SmartReact
```

## Configuration

### /public folder
- Configure properties in **configs.js**

| Property |Description|
| ------------ | ------------ |
|endpoint|Endpoint of the API service|
|homepage|App root URL. When a sub folder is an App, set /subfolder|
|org|Limited organization id to avoid penetration|
|webUrl|Web url of the cloud for global resource references|

- Change title and description in **index.html**
- Replace favicon.ico, logo192.png, logo512.png
- Rename fields 'short_name' and 'name' in **manifest.json**
- Change as 'Disallow: /' to prevent robots in **robots.txt**. https://www.robotstxt.org/robotstxt.html

### src/app
- AppTheme.ts: Custom theme definition.
- MainContainer.tsx: App range common page container.
- Settings.ts: App settings with labels.

### src/i18n
i18n quick solution for multiple languages support.

### src/main
- Main.tsx: First page after login

### src/public
- Login.tsx: Login page.
- LoginForm.tsx: Login form part.

### src/user
- ChangePassword.tsx: User change password page.

### App.tsx
App page. All routers defined here.

#### AppDrawer.tsx
App drawer displayed in left side.

#### AppMenuBar.tsx
App menubar displayed in right side.

### index.tsx
Default component to start loading. A couple of Context components applied.
- ThemeProvider: Material-UI theme customization. Change /src/app/AppTheme.ts
- LanguageStateProvider: Language labels state.
- NotificationDisplayMU: Notification component.
- UserStateProvider: User state.
- BrowserRouter: Router for page navigation.

### /package.json
| Property |Description|
| ------------ | ------------ |
|name|Lowercase identification name|
|version|https://docs.npmjs.com/cli/version|
|description|Meaningful description of the project|

## SmartERP APIs

### Source code
https://github.com/ETSOO/SmartERP

### API documentation
Swagger applied. Reaplce  \* with the cloud API URL part: https://*.etsoo.com/swagger/
