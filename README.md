# Electronic Attendance (E-Attendance) System

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Laravel Part

-   composer install
-   php artisan migrate (if you are running the project for the first time)
-   php artisan db:seed
-   php artisan serve (to serve the project, usually on port 8000)

## React Part

### React file structure

All files can be found in `./resources/js`

-   Components (All small components should go here)
-   Layouts
-   Pages (Each page should go here, they can be in sub-folders too)

### Run react app

-   npm i (run once on first time)[install dependencies]
-   npm run dev (to run the react serve abd compile the app in real time)[auto refreshes when file change is detected]

### Contributers

-   **[Stanley Kwamina Otabil](https://github.com/HueyWhyte)**
-   **[Jacob Borders](https://github.com/code-kid)**
-   **[Priscilla](https://github.com/priscilla)**

## Directory Hierarchy

```
|—— app
|    |—— Console
|        |—— Kernel.php
|    |—— Exceptions
|        |—— Handler.php
|    |—— Http
|        |—— Controllers
|            |—— AdminController.php
|            |—— AttendanceController.php
|            |—— Auth
|                |—— AuthenticatedSessionController.php
|                |—— ConfirmablePasswordController.php
|                |—— EmailVerificationNotificationController.php
|                |—— EmailVerificationPromptController.php
|                |—— NewPasswordController.php
|                |—— PasswordResetLinkController.php
|                |—— RegisteredUserController.php
|                |—— VerifyEmailController.php
|            |—— Controller.php
|            |—— EmployeeController.php
|            |—— LecturerController.php
|            |—— LogController.php
|            |—— SettingController.php
|            |—— StudentController.php
|        |—— Kernel.php
|        |—— Middleware
|            |—— Authenticate.php
|            |—— EncryptCookies.php
|            |—— HandleInertiaRequests.php
|            |—— PreventRequestsDuringMaintenance.php
|            |—— RedirectIfAuthenticated.php
|            |—— TrimStrings.php
|            |—— TrustHosts.php
|            |—— TrustProxies.php
|            |—— VerifyCsrfToken.php
|        |—— Requests
|            |—— Auth
|                |—— LoginRequest.php
|    |—— Models
|        |—— Admin.php
|        |—— Attendance.php
|        |—— Employee.php
|        |—— Lecturer.php
|        |—— Log.php
|        |—— Setting.php
|        |—— Student.php
|        |—— User.php
|    |—— Providers
|        |—— AppServiceProvider.php
|        |—— AuthServiceProvider.php
|        |—— BroadcastServiceProvider.php
|        |—— EventServiceProvider.php
|        |—— RouteServiceProvider.php
|—— database
|    |—— .gitignore
|    |—— factories
|        |—— AdminFactory.php
|        |—— AttendanceFactory.php
|        |—— EmployeeFactory.php
|        |—— LecturerFactory.php
|        |—— LogFactory.php
|        |—— SettingFactory.php
|        |—— StudentFactory.php
|        |—— UserFactory.php
|    |—— migrations
|        |—— 2014_10_12_000000_create_users_table.php
|        |—— 2014_10_12_100000_create_password_resets_table.php
|        |—— 2019_08_19_000000_create_failed_jobs_table.php
|        |—— 2019_12_14_000001_create_personal_access_tokens_table.php
|        |—— 2022_07_04_170215_create_students_table.php
|        |—— 2022_07_04_170456_create_lecturers_table.php
|        |—— 2022_07_04_170752_create_logs_table.php
|        |—— 2022_07_04_170954_create_attendances_table.php
|        |—— 2022_07_04_171038_create_employees_table.php
|        |—— 2022_07_04_171118_create_admins_table.php
|        |—— 2022_07_04_171356_create_settings_table.php
|    |—— seeders
|        |—— AdminSeeder.php
|        |—— AdminsSeeder.php
|        |—— AttendanceSeeder.php
|        |—— DatabaseSeeder.php
|        |—— EmployeeSeeder.php
|        |—— LecturerSeeder.php
|        |—— LogSeeder.php
|        |—— SettingSeeder.php
|        |—— StudentSeeder.php
|—— resources
|    |—— css
|        |—— app.css
|    |—— js
|        |—— app.jsx
|        |—— bootstrap.js
|        |—— Components
|            |—— ApplicationLogo.jsx
|            |—— Button.jsx
|            |—— Checkbox.jsx
|            |—— Dropdown.jsx
|            |—— Input.jsx
|            |—— Label.jsx
|            |—— NavLink.jsx
|            |—— ResponsiveNavLink.jsx
|            |—— SideNavigation.jsx
|            |—— ValidationErrors.jsx
|        |—— Layouts
|            |—— Authenticated.jsx
|            |—— Guest.jsx
|        |—— Pages
|            |—— Attendance.jsx
|            |—— Auth
|                |—— ConfirmPassword.jsx
|                |—— ForgotPassword.jsx
|                |—— Login.jsx
|                |—— Register.jsx
|                |—— ResetPassword.jsx
|                |—— VerifyEmail.jsx
|            |—— Dashboard.jsx
|            |—— Lecturer
|                |—— Index.jsx
|                |—— Report.jsx
|            |—— Lecturers.jsx
|            |—— Settings.jsx
|            |—— Staff.jsx
|            |—— Student
|                |—— Index.jsx
|                |—— Report.jsx
|            |—— Students.jsx
|            |—— Welcome.jsx
|    |—— views
|        |—— app.blade.php
|        |—— welcome.blade.php
|—— routes
|    |—— api.php
|    |—— auth.php
|    |—— channels.php
|    |—— console.php
|    |—— web.php
```

## Code Details

### Tested Platform

-   software
    ```
    OS: Debian unstable (May 2021), Ubuntu LTS
    Python: 3.8.5 (anaconda)
    PyTorch: 1.7.1, 1.8.1
    ```
-   hardware
    ```
    CPU: Intel Xeon 6226R
    GPU: Nvidia RTX3090 (24GB)
    ```

### Hyper parameters

```

```

## License

## Citing

If you use xxx,please use the following BibTeX entry.

```

```
