## [v2.0.0](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.9...v2.0.0) (Fri, 08 Dec 2017 10:31:11 GMT)
 - Merge pull request #3 from OpusCapita/issue/2
    
    Dropping v. React 0.14 support, from now package require React v. 15 or 16.
    
    Migrating to @opuscapita/i18n 1.1.0 version and using latest I18nmanager signatures both for contsructor and register method calls.
    Add an explicit note to documentation that I18nContext should be used only for test/demo purposes. For the same purposes new component RegisterTranslations that allows to register translation bundles sing JSX notation.
    Reformatting all js files using LF. (f71ba6d b966d3d, 7eedf14)
 - Dropping v. React 0.14 support, from now package require React v. 15 or 16.
    Migrating to @opuscapita/i18n 1.1.0 version and using latest I18nmanager signatures both for contsructor and register method calls.
    Add an explicit note to documentation that I18nContext should be used only for test/demo purposes. For the same purposes new component RegisterTranslations that allows to register translation bundles sing JSX notation.
    Reformatting all js files using LF. (Alexey Sergeev <sab@scand.com>, b966d3d)

## [v1.0.9](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.8...v1.0.9) (Sun, 03 Dec 2017 17:11:16 GMT)
 - Fix tests
    
    Two tests skipped because breaking passing react context in enzyme@3.2.0 (Kirill Volkovich <kirill.volkovich@opuscapita.com>, bf6f221)
 - React 16.x.x support (Kirill Volkovich <kirill.volkovich@opuscapita.com>, 034b8cc)
 - Update README.md [skip ci] (Alexey Sergeev <asergeev-sc@users.noreply.github.com>, 2f6f80e)
 - Update I18nContext.DOCUMENTATION.md (Alexey Sergeev <asergeev-sc@users.noreply.github.com>, 3436940)
 - '@opuscapita/opuscapita-ui' was renamed to '@opuscapita/styles' -> replacing old packae with new one (Alexey Sergeev <sab@scand.com>, ea50284)
 - Removing lodash usage (Alexey Sergeev <sab@scand.com>, f0dee48)
 - Updating CircleCI build process to generate/store correct test reports (Alexey Sergeev <sab@scand.com>, 9780794)
 - Replacing hardcoded css/font/image fileswith @opuscapita/opuscapita-ui package. Removing Jenkins build confiuration files (CircleCI is used instead). (Alexey Sergeev <sab@scand.com>, 82b4503)
 - Change README.md (baliunov <baliunov@scand.com>, 05089a9)
 - Enabled Coverage (baliunov <baliunov@scand.com>, 2bbca86)
 - Add Coverage (baliunov <baliunov@scand.com>, 1608e84)
 - Change .circleci (baliunov <baliunov@scand.com>, ba3b5db)
 - Add circleci (baliunov <baliunov@scand.com>, 50aa7f0)

## [v1.0.8](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.7...v1.0.8) (Thu, 15 Jun 2017 10:46:36 GMT)
 - Update @opuscapita/i18n to 1.0.14 (Kirill Volkovich <volkovich@scand.com>, ed534db)

## [v1.0.7](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.6...v1.0.7) (Thu, 01 Jun 2017 08:52:34 GMT)
 - Adding publishingConfig and controbutors (Alexey Sergeev <sab@scand.com>, 6ad863a)
 - Migrating from OpusCapitaBES to OpusCapita. Set up new package name: '@opuscapita/react-i18n' (Alexey Sergeev <sab@scand.com>, e38c211)

## [v1.0.6](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.5...v1.0.6) (Wed, 05 Apr 2017 13:41:23 GMT)
 - Add babel-plugin-lodash
    
    It should reduce size of bundle and transpiled components
    
    Updated opuscapita-i18n 1.0.8 => 1.0.12 (Kirill Volkovich <volkovich@scand.com>, f04fa75)

## [v1.0.5](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.4...v1.0.5) (Tue, 03 Jan 2017 12:21:26 GMT)
 - Updated 'opuscapita-i18n' 1.0.7 => 1.0.8 (kirillvolkovich <kirill.volkovich@jcatalog.com>, 017ebbd)

## [v1.0.4](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.3...v1.0.4) (Thu, 22 Dec 2016 13:11:27 GMT)
 - Updated 'eslint-config-opuscapita' 1.0.3 => 1.0.4
    
    Fixed eslint errors (kirillvolkovich <kirill.volkovich@jcatalog.com>, 9ec537f)

## [v1.0.3](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.2...v1.0.3) (Thu, 22 Dec 2016 12:46:23 GMT)
 - Fixed npm-build (kirillvolkovich <kirill.volkovich@jcatalog.com>, 407f6c0)
 - Fixed package bundle exports (kirillvolkovich <kirill.volkovich@jcatalog.com>, 992c591)
 - Merge branch 'master' of opuscapita.github.com:OpusCapitaBES/js-react-i18n (af10a17 05330a2, 6417147)
 - Changed  goal. *.SCOPE and *.md not ignored now (kirillvolkovich <kirill.volkovich@jcatalog.com>, af10a17)
 - Merge pull request #1 from OpusCapitaBES/feature-I18nContext-component
    
    I18nContext component (92ae07a 15db82b, 05330a2)
 - Written tests on `i18nContext` component (kirillvolkovich <kirill.volkovich@jcatalog.com>, 15db82b)
 - Written documentation on `I18nContext` component (kirillvolkovich <kirill.volkovich@jcatalog.com>, 3df26f7)
 - Modified webpack config. Added loaders. (kirillvolkovich <kirill.volkovich@jcatalog.com>, 73b17db)
 - Implemented `I18nContext` component
    
    Use it as a parent component if you need pass I18nManager to children context.
    Instance of I18nManager exposes as context.i18n.
    
    Now it has no support of I18nManager.register(). It should be implemented soon. (kirillvolkovich <kirill.volkovich@jcatalog.com>, 2b49945)
 - Decorate-jenkinsfile npm goal removed (kirillvolkovich <kirill.volkovich@jcatalog.com>, 92ae07a)
 - Move each component to its own directory (kirillvolkovich <kirill.volkovich@jcatalog.com>, e6be17a)
 - Fixing build (Alexey Sergeev <alexey.sergeev@jcatalog.com>, 19699ff)
 - Adding test, codecoverage, documetnation. Updating dependencies. (Alexey Sergeev <alexey.sergeev@jcatalog.com>, 8cf7c38)

## [v1.0.2](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.1...v1.0.2) (Fri, 16 Dec 2016 11:46:39 GMT)
 - Renamed package '@opuscapita/react-i18n => opuscapita-react-i18n'. Updated dependencies (kirillvolkovich <kirill.volkovich@jcatalog.com>, 56ec22a)
 - Moved to Jenkinsfile buildprocess (kirillvolkovich <kirill.volkovich@jcatalog.com>, 3f2be71)

## [v1.0.1](https://github.com/OpusCapitaBES/js-react-i18n/compare/v1.0.0...v1.0.1) (Wed, 07 Dec 2016 17:34:40 GMT)
 - Node engines '4.x' => '>=4.x'. (kirillvolkovich <kirill.volkovich@jcatalog.com>, 4d00dae)

## [v1.0.0](https://github.com/OpusCapitaBES/js-react-i18n/compare/undefined...v1.0.0) (Wed, 07 Dec 2016 10:44:27 GMT)
 - Merge branch 'master' of opuscapita.github.com:OpusCapitaBES/js-react-i18n (e54a5b0 f31d511, 3608d5c)
 - Update README.md (Kirill Volkovich <kirill.volkovich@jcatalog.com>, f31d511)
 - Moved to @opuscapita scope. (kirillvolkovich <kirill.volkovich@jcatalog.com>, 6544dac)
 - (PIM-11430) Updated jcatalog-i18n version (Sergey Korsik <ksy@SCAND.LOCAL>, 7759222)
 - Updated dev-tools version. (dzhitomirsky <dzhitomirsky@jcatalog.com>, 794f921)
 - Updating dev tools dependency (Dmitry Divin <dmitry.divin@jcatalog.com>, 90406c0)
 - Refactored build process. (dzhitomirsky <dzhitomirsky@jcatalog.com>, c213f99)
 - Fixing build (Dmitry Divin <dmitry.divin@jcatalog.com>, 33bfdde)
 - Cleaup code and dependencies. Applying jCatalog ESLint rules. (Alexey Sergeev <alexey.sergeev@jcatalog.com>, c466075)
 - Fixing engines (Alexey Sergeev <alexey.sergeev@jcatalog.com>, 13aec3b)
 - Adjusting project config (Alexey Sergeev <alexey.sergeev@jcatalog.com>, 676b439)
 - Adjusting build process (Alexey Sergeev <alexey.sergeev@jcatalog.com>, f5bb3ae)
 - Updating version (Dmitry Divin <dmitry.divin@jcatalog.com>, 0c9cc8b)
 - Rollback version (Dmitry Divin <dmitry.divin@jcatalog.com>, 4db6777)
 - Remove react-hmre preset (Dmitry Divin <dmitry.divin@jcatalog.com>, 509a970)
 - Remove jcatalog-react-i18n-1.1.1-SNAPSHOT.20160421T105433Z.79d3c64.tgz (Dmitry Divin <dmitry.divin@jcatalog.com>, b063cbe)
 - Fixing dependency (Dmitry Divin <dmitry.divin@jcatalog.com>, 1f8d3ad)
 - Refactoring code: remove .jsx (Dmitry Divin <dmitry.divin@jcatalog.com>, 79d3c64)
 - Merge webpack -> master (5a01b94 750fe12, c342c59)
 - Updating version (Dmitry Divin <dmitry.divin@jcatalog.com>, 5a01b94)
 - Fixing build (Dmitry Divin <dmitry.divin@jcatalog.com>, a285d56)
 - Fixing dependency (Dmitry Divin <dmitry.divin@jcatalog.com>, 0731912)
 - (CMMN-4795) Implementing build process for npm module (Dmitry Divin <dmitry.divin@jcatalog.com>, 0846f81)
 - Updated version. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 750fe12)
 - test (Dmitry Divin <dmitry.divin@jcatalog.com>, 2112f3b)
 - test (Dmitry Divin <dmitry.divin@jcatalog.com>, 369435a)
 - test (Dmitry Divin <dmitry.divin@jcatalog.com>, 5e7b0b3)
 - test (Dmitry Divin <dmitry.divin@jcatalog.com>, 84e2c51)
 - Adding default options (Dmitry Divin <dmitry.divin@jcatalog.com>, b57b2a8)
 - Remove private=true (Dmitry Divin <dmitry.divin@jcatalog.com>, 67a8b8a)
 - 1.0.1 (Dmitry Divin <dmitry.divin@jcatalog.com>, 58164b0)
 - 1.0.0 (Dmitry Divin <dmitry.divin@jcatalog.com>, 86ea1a2)
 - Fixing build under Node 4.x (LTS). (Alexey Sergeev <alexey.sergeev@jcatalog.com>, 4b0cf45)
 - Fixed browserify build. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, bf3c14f)
 - Moved to branch master. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, b6bcb74)
 - Fixed code style. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, f9ff65a)
 - Reimplemented webpack workflow. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 3556c92)
 - Fixed import. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, d7d4cc3)
 - Improved conf. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, d41179b)
 - Improved config. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, adc0ea2)
 - Refactored code. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 93faf87)
 - Fixed export. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 4fb4673)
 - Fixed node version. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, d28e9e8)
 - Fixed protocol. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 91da9c3)
 - Removed useless code. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 7a45445)
 - Restructured. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 27731f8)
 - Removed useless component. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, b2719bb)
 - Implemented new workflow. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, ceef1de)
 - Renamed files. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 3da873e)
 - Fixed work. (Eugene Viktarovich <eugene.viktorovich@jcatalog.com>, 4ee801f)
 - (CMMN-4678) Moving to reactjs 0.14.x (Dmitry Divin <dmitry.divin@jcatalog.com>, 3975cad)
 - Rewrited Formatted(HTML)Message tags. (dzhitomirsky <dzhitomirsky@jcatalog.com>, 642c489)
 - Added IE Intl polyfill. (dzhitomirsky <dzhitomirsky@jcatalog.com>, 5506718)
 - Fixing bug (Dmitry Divin <dmitry.divin@jcatalog.com>, da99fb0)
 - Moving changes from jcatalog-react-intl module (Dmitry Divin <dmitry.divin@jcatalog.com>, 8b77fa9)

