import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filtros: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Todos produtos</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Digite sua pesquisa!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Classificar por: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Mais novos</option>
                    <option value='sort=oldest'>Mais antigos</option>
                    <option value='sort=-sold'>Melhores vendas</option>
                    <option value='sort=-price'>Preço: Alto-Baixo</option>
                    <option value='sort=price'>Preço: Baixo-Alto</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
