import { uuid } from 'uuidv4';


class Product {
  constructor(code, description, buyPrice, sellPrice, lovers = 0, tags, id = uuid()) {
    this.code = code;
    this.description = description;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
    this.lovers = lovers;
    this.tags = tags;
    this.id = id;
  }
}
