const ticket = [{}]

module.exports = class Ticket {
  constructor(nuevoTicket){
    this.name = nuevoTicket.name || 'NULL';
    this.url = nuevoTicket.url || 'NULL';
    this.cantidad = nuevoTicket.cantidad || 'NULL';
    this.peliNombre = nuevoTicket.peliNombre || 'NULL';
    this.boletos = nuevoTicket.boletos || 'NULL';
    this.texto = nuevoTicket.texto || 'NULL';
  }

  save(){
    ticket.push(this);
  }

  static fetchAll() {
    return ticket.name;
  }
}
