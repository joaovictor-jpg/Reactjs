import { useEffect, useState } from 'react';
import ITarefa from '../../types/ITarefa';
import Botao from '../Botao';
import styles from './Cronometro.module.scss';
import Relogio from './Relogio';
import { tempoParaSegundo } from '../../common/utils/time';

interface CronometroProps {
    selecionado: ITarefa | undefined
    finalizada: () => void
}

export default function Cronometro({ selecionado, finalizada }: CronometroProps) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundo(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizada();
        }, 1000)
    }

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar!
            </Botao>
        </div>
    );
};