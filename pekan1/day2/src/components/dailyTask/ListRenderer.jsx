function ListRenderer({ items }) {
return (
<div className="p-4 border rounded-xl mt-4">
<h3>List Renderer</h3>
<ul>
{items.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
</div>
);
}


export default ListRenderer;