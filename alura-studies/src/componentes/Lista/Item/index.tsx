import ITarefa from '../../../types/ITarefa';
import styles from './Item.module.scss';

interface ItemProps extends ITarefa {
    selecioneTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecioneTarefa }: ItemProps) {
    return (
        <li
            className={`${styles.item} ${selecionado && styles.itemSelecionado} ${completado && styles.itemCompletado}`}
            onClick={() => !completado && selecioneTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}
        >
            <h3>{tarefa}</h3>
            <span>
                {tempo}
            </span>
            {completado && <span className={styles.concluido} aria-label='Tarefa completada'></span>}
        </li>
    );
};