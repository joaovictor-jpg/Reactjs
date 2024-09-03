import Item from './Item';
import styles from './Lista.module.scss';
import ITarefa from '../../types/ITarefa';

interface ListaProps {
    tarefas: ITarefa[],
    selecioneTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecioneTarefa }: ListaProps) {
    return (
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        {...item}
                        key={item.id}
                        selecioneTarefa={selecioneTarefa}
                    />
                ))}
            </ul>
        </aside>
    );
};