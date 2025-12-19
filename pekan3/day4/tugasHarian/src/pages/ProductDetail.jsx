import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { productId } = useParams()

  return <h3>Detail Produk ID: {productId}</h3>
}

export default ProductDetail
