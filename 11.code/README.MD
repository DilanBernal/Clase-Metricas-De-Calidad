### **Explicación de cada sección**

1. Desinstalar mysql2 -> ```npm uninstall mysql2```
2. Instalar la dependencia postgress -> ```npm i pg```
3. Cambiar las variables de entorno ```.env``` para ajustarlo a postgres
4. Adaptar el ```UserEntity``` con los datos de Postgress
5. En el ```con_data_base``` informar que ahora es Postgress
6. Agregar ```environmnent-vars.ts``` agregar el Schema como variable de entorno
7. Agregar el schema en el ```con_data_base.ts```