import { Icon } from '@iconify-icon/react/dist/iconify.js'
import { useContext } from 'react'
import { ShortContext } from '../context/ShortContext'
import { SearchContext } from '../context/SearchContext'

function PuppetCard({ name, image, title }) {
    const { inList, handleList } = useContext(ShortContext)
    const {valor, setValor, visible, setVisible} = useContext(SearchContext)
    const isSelected = inList.includes(name);

    const hidden = (valor !== name && valor.length > 2) ? "hidden" : ""

    const seleccionar = (name, image) => {
        handleList(name, image)

    }
    const icono = isSelected ? "fluent-emoji-flat:red-heart"
        : "ei:heart"
    return (
        <li className={`${hidden} overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5`}>
            <img
                className="aspect-square object-cover"
                alt={name}
                src={`/images/${image}.jpg`}
            />
            <div className="gap flex items-center justify-between p-4 text-sm">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{name}</p>
                    <span className="text-slate-300">·</span>
                    <p className="text-slate-500">{title}</p>
                </div>
                <button className="group cursor-pointer"
                    onClick={() => seleccionar(name, image)}>
                    <Icon icon={icono} width="32" />
                </button>
            </div>
        </li>
    )
}

export default PuppetCard