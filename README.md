# Aplicación de tablas de multiplicar por consola

para regenerar los modulos de node ejecutar

```
npm install
```

# banderas que recibe el programa

```
--base
-b
```

es la base de la tabla de multiplicar

```
--l
-listar
```

es para mostrar o no la tabla en consola

```
--h
-hasta
```

es la longitud de la tabla de multiplicar

ejemplo de como usar

```
node app --base=5 -l -h 10
```
```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     base de la tabla de multiplicar             [number] [required]
  -l, --listar   elegir si mostrar o no la tabla en consola
                                                      [boolean] [default: false]
  -h, --hasta    longitud de la tabla de multiplicar      [number] [default: 10]
```