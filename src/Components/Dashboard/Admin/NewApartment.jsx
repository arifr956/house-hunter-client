
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Home/SectionTitle';

const NewApartment = () => {
    return (
        <div>
           <Helmet>
                <title>House Hunter | Add Apartment</title>
            </Helmet>
            <SectionTitle heading={'Add New Apartment'} />

            

        </div>
    );
};

export default NewApartment;