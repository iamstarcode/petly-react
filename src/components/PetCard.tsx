import * as React from 'react';
import {PetCardPropsType} from '@/types/index'
import { Link } from 'react-router-dom';
import { getLinkForProxy } from '@/utils/proxy';

const PetCard: React.VFC<PetCardPropsType> = ({name,animal,city,images,state,id}) => {
    
    return <>
        <div className="bg-white dark:bg-i-neutral border border-graywhite dark:border-gray-800 px-5 py-5 rounded-xl">
            <img src={getLinkForProxy(images[0])} className="w-full h-48 rounded-xl object-cover " alt={name} />
            <div className="flex justify-between items-center py-3">
                <span className="block">
                    <h1 className="text-2xl text-gray3 font-medium m-0 dark:text-white">{name}</h1>
                    <span className="text-sm text-gray7 block leading-none relative -top-1 dark:text-gray-400">{city}</span></span>
                <img src={`/img/${animal}.svg`} alt={animal} />
            </div>
            <div className="flex justify-between items-center py-1">
                <Link className="bg-i-primary text-white px-2 py-3 rounded-full text-sm" to={`details/${id}`}>View Details</Link>
                <span className="flex items-center space-x-3">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00236 5.17917C7.25351 5.17917 6.53534 5.46386 6.00582 5.97062C5.47631 6.47738 5.17883 7.16469 5.17883 7.88135C5.17883 8.59801 5.47631 9.28533 6.00582 9.79208C6.53534 10.2988 7.25351 10.5835 8.00236 10.5835C8.7512 10.5835 9.46938 10.2988 9.99889 9.79208C10.5284 9.28533 10.8259 8.59801 10.8259 7.88135C10.8259 7.16469 10.5284 6.47738 9.99889 5.97062C9.46938 5.46386 8.7512 5.17917 8.00236 5.17917ZM6.3553 7.88135C6.3553 7.4633 6.52883 7.06237 6.83771 6.76676C7.1466 6.47115 7.56553 6.30508 8.00236 6.30508C8.43918 6.30508 8.85812 6.47115 9.167 6.76676C9.47589 7.06237 9.64941 7.4633 9.64941 7.88135C9.64941 8.2994 9.47589 8.70034 9.167 8.99594C8.85812 9.29155 8.43918 9.45762 8.00236 9.45762C7.56553 9.45762 7.1466 9.29155 6.83771 8.99594C6.52883 8.70034 6.3553 8.2994 6.3553 7.88135Z" fill="#AFB6C1"></path><path d="M14.1176 12.6102L9.37035 17.4336C9.19436 17.6124 8.98201 17.7549 8.74635 17.8523C8.51069 17.9498 8.2567 18 8 18C7.7433 18 7.48931 17.9498 7.25365 17.8523C7.01799 17.7549 6.80564 17.6124 6.62965 17.4336L1.88236 12.6102H1.90024L1.89224 12.6012L1.88236 12.5899C0.663867 11.2108 -0.00322667 9.46227 1.17354e-05 7.65618C1.17354e-05 3.42772 3.58165 0 8 0C12.4183 0 16 3.42772 16 7.65618C16.0032 9.46227 15.3361 11.2108 14.1176 12.5899L14.1078 12.6012L14.0998 12.6102H14.1176ZM13.2033 11.881C14.2518 10.7023 14.8263 9.20418 14.8235 7.65618C14.8235 4.04967 11.7685 1.12591 8 1.12591C4.23153 1.12591 1.17648 4.04967 1.17648 7.65618C1.17648 9.26849 1.78542 10.7421 2.79671 11.881L2.94165 12.0445L7.48612 16.6612C7.55211 16.7283 7.63175 16.7817 7.72012 16.8182C7.80849 16.8548 7.90374 16.8736 8 16.8736C8.09626 16.8736 8.19151 16.8548 8.27988 16.8182C8.36825 16.7817 8.44789 16.7283 8.51388 16.6612L13.0583 12.0445L13.2033 11.881Z" fill="#AFB6C1"></path></svg>
                    <span className="text-sm text-grayfade">{`${city},${state}`}</span>
                </span>
            </div>
        </div>
    </>;
};

export default PetCard;

