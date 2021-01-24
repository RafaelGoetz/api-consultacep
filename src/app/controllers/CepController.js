import cepService from '../services/cepServices'

class cepController {
    // http://localhost:3333/cep/93600601

    show = (req, res) => {

        const {cep} = req.params;

        // URL do viacep

        const url = `${cep}/json/`

        cepService.get(url).then(response => {
            res.json(response.data)
        })
        // ser usar o response no lugar de res da erro, pq?

    }

    query = (req, res) => {
        const { uf, cidade, rua } = req.query;

        // Montar a URL no padrão do ViaCep
        const url = `${uf}/${cidade}/${rua}/json`

        cepService.get(url).then(response => {
            res.json(response.data)
        }).catch(error => res.send(error))

    }
}

export default new cepController;