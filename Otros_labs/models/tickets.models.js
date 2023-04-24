const ticket = [{}]

module.exports = class Ticket {
  constructor(nuevoTicket){
    this.name = nuevoTicket.name || 'NULL';
    this.cantidad = nuevoTicket.cantidad || 'NULL';
    this.peliNombre = nuevoTicket.peliNombre || 'NULL';
  }

  save(){
    ticket.push(this);
  }

  static fetchAll() {
    return ticket.name;
  }
}
