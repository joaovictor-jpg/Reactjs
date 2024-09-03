export function tempoParaSegundo(tempo: string) {
    const [hora, minuto, segundo] = tempo.split(':');
    const horaParaSegundo = Number(hora) * 3600;
    const minutosParaSegundos = Number(minuto) * 60;
    return horaParaSegundo + minutosParaSegundos + Number(segundo);
}