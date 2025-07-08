import PuppetCard from "./PuppetCard"
import { puppies } from "../data/puppies"

function PuppiesList() {
    return (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {puppies.map((puppy) => 
                <PuppetCard key={puppy.id} name={puppy.name} image={puppy.image} title={puppy.title} />
            )}
        </ul>
    )
}

export default PuppiesList