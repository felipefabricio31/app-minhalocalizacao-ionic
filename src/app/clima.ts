export class Clima {
    public id: number;
    public nomeCidade: string;
    public estado: string; //state
    public pais: string; //country - País da cidade.
    //data Object[]	Lista de objetos com dados de previsão por hora.
    public dataEua: Date;
    public dataBr: Date;
    //rain	Object	//Dados de chuva.
    public precipitacaoMilimetros: Number; //precipitation - Precipitação em milímetro.
    //wind	Object	//Dados de vento.
    public velocidade: Number; //velocity - Intensidade do vento
    public direcao: number; //diretion - Direção do vento.
    public direcaoGraus: number; //direction_degrees - Direção do vento em graus.
    public RajadaVento: string; //gust - Rajada do vento em km/h.
    //temperature	Object	//Dados de temperatura.
    public temperature: number; //Temperature - Temperatura em graus celsius.
}