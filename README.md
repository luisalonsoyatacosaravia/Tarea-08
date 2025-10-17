### 2. Creación de la Tabla
```sql
CREATE TABLE mascotas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  edad SMALLINT
);
---

```bash
mascotas/
├── config/              
├── controllers/         
├── models/              
├── routes/              
├── .env                 
├── app.js               
└── server.js            

------

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=db_mascotas  
DB_PORT=3306

-----------
```markdown
### 4. Pasos de Instalación y Ejecución
pasos para el node
git init -y
npm install express mysql2 dotenv nodemon
nodemom server