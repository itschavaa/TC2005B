const db = require('../util/database');


module.exports = class Noticia {
  constructor(nuevaNoticia){
    this.titulo = nuevaNoticia.titulo || '';
    this.texto = nuevaNoticia.texto || '';
  }

  save() {
      return db.execute('INSERT INTO noticia (titulo, texto) VALUES (?, ?)',
          [this.titulo, this.texto]
      );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM noticia');
  }
}
