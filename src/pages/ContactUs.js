import React from "react";
import Container from "../components/Container";
import mail from "../assets/mail.png";
import Navbar from "../Navbar";


const ContactUs = () => {

    return(
        <div>
        <Navbar />

        <div class='bg-gray-100'>
<Container>
    
<h3 class='text-3xl text-blue-900'> Contact Us</h3>

<p class='w-2/3 mt-5'>Lorem ipsum dolor sit amet, consecteur adipsing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua </p>


<form className="form mt-8">

<div class='flex space-x-4'>
<div class='flex-1'>
<label class='text-base'>Full Name
<br />
<input
class='border py-2 px-3 bg-white w-1/2 '
type='text'
name='name'
placeholder='First Name'
/>
</label>
</div>

<div class='flex-1'>
<label class='text-base'>Email
<br />
<input
class='border py-2 px-3 white w-1/2 '
type='email'
name='email'
placeholder='First Name'
/>
</label>
</div>
</div>

    <div class='flex-1 mt-4'>
<label class='text-base'>Messages
<br />
<input
class='border py-10 px-5 bg-white w-1/2 '
type='text'
name='message'
placeholder='Messages'
/>
</label>

</div>		
<div class='flex-1'>
<button class='bg-blue-900 hover:bg-blue-700 mt-5 mb-20 text-white  py-3 px-6'>
									Send Message
								</button>
                                </div>			


</form>
</Container>


<Container className='rounded'>

<div class='flex flex-col bg-yellow-400 md:flex-row w-full text-center lg:flex-row items-center justify-center'>
<div class='w-full flex justify-center md:justify-center mt-20'>
    <img src={mail} alt='mail' />
</div>

<div>
    <h4 className='text-2xl text-left text-blue-900 font-bold w-11/12 lg:w-8/12 '>
        Stay Up to date
    </h4>

    <p class='w-3/4 mt-5 text-left text-blue-900'>
        Signup for our newsletter. Then you get regular news, bitcoin exchange rates
        and available gift cards, etc.
    </p>

    <p class='w-3/4  mt-5 text-left text-blue-900'>
        Looking for help? Contact Us here.{" "}
    </p>
</div>
</div>


</Container>


</div>
        </div>
    )
}


export default ContactUs;
