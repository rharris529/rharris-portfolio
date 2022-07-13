import React, {useEffect} from 'react';

function Nav(props) {

    const {
        categories = [],
        currentCategory,
        setCurrentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory])

    return (
        <header>
            <nav>
                <ul className='flex-row'>
                {categories.map((category) => (
                    <li key={category.name}>
                    <a href={`${currentCategory.name === category.name}`} onClick={() => {
                        currentCategory(category);
                        setCurrentCategory(false);
                    }}>{category.name}
                    </a>
                    </li>
                ))} 
                </ul>
            </nav>
        </header>
    )
}

export default Nav;