import questoes from '../bancoDeQuestoes';

export default function handler(req, res) {
    const id = +req.query.id

    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === id)
    
    if(unicaQuestaoOuNada.length === 1) {
      const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
      res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
      res.status(204).send()
    }
  }
  