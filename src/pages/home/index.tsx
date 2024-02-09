
import './home.scss'
import { Footer } from "./_components/footer"
import { Header } from '../../components/header/Header'
import { CategoryBar } from './_components/category-bar'
import ProductList from './_components/Products'

export const Home = () => {


    return (
        <>
            <CategoryBar/>
            <ProductList />
        </>
    )
}