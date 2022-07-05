# Electronic Attendance (E-Attendance) System

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Laravel Part

-   `composer install`
-   `php artisan migrate` (if you are running the project for the first time)
-   `php artisan db:seed`
-   `php artisan serve` (to serve the project, usually on port 8000)

## React Part

### React file structure

All files can be found in `./resources/js`

-   Components (All small components should go here)
-   Layouts
-   Pages (Each page should go here, they can be in sub-folders too)

### Run react app

-   `npm i` (run once on first time)[install dependencies]
-   `npm run dev` (to run the react serve abd compile the app in real time)[auto refreshes when file change is detected]

### Contributers

-   **[Stanley Kwamina Otabil](https://github.com/HueyWhyte)**
-   **[Jacob Borders](https://github.com/kwesi-codekid)**
-   **[Priscilla](https://github.com/priscilla)**

## Directory Hierarchy

```
|—— app
|    |—— Http
|        |—— Controllers
|            |—— AdminController.php
|            |—— AttendanceController.php
|            |—— Controller.php
|            |—— EmployeeController.php
|            |—— LecturerController.php
|            |—— LogController.php
|            |—— SettingController.php
|            |—— StudentController.php
|    |—— Models
|        |—— Admin.php
|        |—— Attendance.php
|        |—— Employee.php
|        |—— Lecturer.php
|        |—— Log.php
|        |—— Setting.php
|        |—— Student.php
|        |—— User.php
|—— database
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
|—— routes
|    |—— api.php
|    |—— auth.php
|    |—— channels.php
|    |—— console.php
|    |—— web.php
```
