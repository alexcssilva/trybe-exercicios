class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, c: string[]){
    console.log(`Criada marca da TV ${b}`);
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
  };

  turnOn():void {
    console.log(`
    TV ${this._brand}, 
    Size: "${this._size}", 
    Resolution: ${this._resolution} 
    Available connections: ${this._connections}
    `);
  }

  get connectedTo(): string {
    return this._connectedTo as string;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}


const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn()

tv1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedTo);