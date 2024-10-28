# deploy dengan vps biznet

-beli server vps biznet

-login ke server vps dengan ssh dengan ip yang ada didashboard
ssh username@your-vps-ip

-install npm dan node di server setelah masuk lewat ssh
-clone github repo di server vps lewat ssh
-setelah itu install semua package npm dengan npm install
-jalankan perintah berikut untuk build npm build 
-install nginx
- kemudian jalankan npm run serve:ssr:news-app maka angular akan berjalan di port 4000
- konfigurasikan nginx menjadi
  server {
    listen 80;  # Port yang digunakan untuk menerima permintaan
    server_name your-domain.com;  # Ganti dengan domain Anda atau IP VPS

    location / {
        proxy_pass http://localhost:4000;  # Arahkan ke aplikasi di port 4000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


-uji kesalahan konfigurasi nginx dengan perintah sudo nginx -t
-restart nginx dengan perintah sudo systemctl restart nginx
-dengan begini aplikasi sudah dideploy










# NewsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.







