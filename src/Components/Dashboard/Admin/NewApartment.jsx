
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../Home/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const NewApartment = () => {

    const axiosSecure = useAxiosSecure();

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        bedrooms: '',
        bathrooms: '',
        roomSize: '',
        picture: '',
        availabilityDate: '',
        rentPerMonth: '',
        phoneNumber: '',
        description: '',
      });
    
      const [open, setOpen] = useState(false);
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const handleSubmit = () => {
        axiosSecure.post('/apartments', formData)
        .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `New Apartment added`,
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({
                    title: '',
                    description: '',
                  });
            }
        });
        console.log('Form submitted:', formData);
        handleClose();
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
           <Helmet>
                <title>House Hunter | Add Apartment</title>
            </Helmet>
            <SectionTitle heading={'Add New Apartment'} />

            <>
      <form>
        <FormControl fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input
            id="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="city">City</InputLabel>
          <Input
            id="city"
            value={formData.city}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="bedrooms">Bedrooms</InputLabel>
          <Input
            id="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="bathrooms">Bathrooms</InputLabel>
          <Input
            id="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="roomSize">Room Size</InputLabel>
          <Input
            id="roomSize"
            value={formData.roomSize}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="picture">Picture URL</InputLabel>
          <Input
            id="picture"
            value={formData.picture}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="availabilityDate">Availability Date</InputLabel>
          <Input
            id="availabilityDate"
            value={formData.availabilityDate}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="rentPerMonth">Rent Per Month</InputLabel>
          <Input
            id="rentPerMonth"
            value={formData.rentPerMonth}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <Input
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="description">Description</InputLabel>
          <Input
            id="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{ backgroundColor: '#ff2c16', marginTop: '10px' }}
          type="submit"
        >
          Submit
        </Button>

        <Button
          onClick={handleOpen}
          variant="contained"
          style={{ backgroundColor: '#ff2c16', marginTop: '10px' }}
        >
          Add New House
        </Button>
      </form>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New House</DialogTitle>
        <DialogContent>
          {/* Additional fields for house details in the modal */}
          {/* ... */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>

        </div>
    );
};

export default NewApartment;