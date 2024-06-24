SELECT * FROM usuarios;
-- estos datos no tienen clave encriptada es una idea para ingresar por pantalla
insert into usuarios (id, email,password,rol,lenguage) 
values (default,'uno@uno.cl','1111','Full Stack Developer','Python');
insert into usuarios (id, email,password,rol,lenguage) 
values (default,'dos@dos.cl','2222','Frontend Developer','Ruby');
insert into usuarios (id, email,password,rol,lenguage) 
values (default,'tres@tres.cl','3333','Full Stack Developer','Python');