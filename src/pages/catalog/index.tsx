import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../../components/popProd/components/Item';
import ItemCl from "../home/Why/why.module.css"
import img from "../../img/catalog.png"

const Catalog = () => {
    let item = {
        title: 'ГЕОТЕРМАЛЬНЫЙ ТЕПЛОВОЙ НАСОС NIBE F1345',
        price: '1000000',
        oldPrice: 37000,
        img: img,
        avible: true,
    }
    return (
        <div className='mx-24'>
            <div className='grid grid-cols-2 w-40 items-center mt-6'>
                <Link to="/" className='col-span-1  text-xl text-black'>Главная/</Link>
                <Link to="/catalog" className='col-span-1 text-xl text-gray-400'>Каталог</Link>
            </div>
            <div className='mt-4 grid grid-cols-2 w-1/4'>
                <h1 className='text-3xl '>Тепловые насосы</h1>
                <h4 className='text-gray-400 text-xl align-top'>(854)</h4>
            </div>
            <div className='mt-6'>
                <div className='grid grid-cols-12 gap-8 items-center'>
                    <button className='border border-yellow-500 py-2 font-semibold text-xl px-12 col-span-2'>Сбросить фильтры</button>
                    <p className='flex items-center col-span-2'>
                        Геотермальные тепловые насосы
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
                            <path d="M10.6668 1.33398L1.3335 10.6673M10.6668 10.6673L1.3335 1.33398L10.6668 10.6673Z" stroke="#E44286" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </p>
                    <div className='col-span-6'></div>
                    <div className="col-span-2">
                        <select name="" id="" className='border border-gray-400 py-2 px-6'>
                            <option value="pop">По популярности</option>
                        </select>
                    </div>
                </div>
                <div className="grid col-span-3 shadow-md shadow-black">
                    <p className='text-2xl grid col-span-3'>Фильтр</p>
                </div>
                <div className="grid col-span-9 grid-cols-3 gap-8">
                    <Item cl={ItemCl} item={item} />
                </div>
            </div>
        </div>
    );
};

export default Catalog;