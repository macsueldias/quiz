import questoes from '../bancoDeQuestoes';
import { embaralhar } from '../../../functions/arrays';

const handler = (req, res) => {
    const idQuestao = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(idQuestao))
}

export default handler