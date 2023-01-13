import { Item } from "../components/items/item";
import { items } from "../components/items/items";

export function Items ( ){
    return (
        <main className="container py-4">
            <div className="w3-row">
                { items.map( (item, idx) => <Item key={idx} bodyItem={item} /> ) }
            </div>
        </main>
    )
}