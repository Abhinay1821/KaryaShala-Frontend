import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-container p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Karyashala</h1>
      <p className="text-lg leading-relaxed mb-6">
        Karyashala is a platform designed to empower individuals and businesses alike by providing a comprehensive suite of tools and resources. Our mission is to bridge the gap between skilled professionals and companies looking to hire top talent. At Karyashala, we believe in fostering growth through education, training, and seamless access to opportunities.
      </p>

      {/* Important Members Section */}
      <section className="important-members mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="member flex flex-col items-center text-center">
            <img src="https://assets.leetcode.com/users/avatars/avatar_1642515090.png" alt="Akram Khan" className="w-32 h-32 rounded-full mb-4 object-cover" />
            <h3 className="text-2xl font-bold">Md Akram Khan</h3>
            <p className="text-lg text-gray-500">Co-Founder </p>
            <p className="text-base leading-relaxed mb-4">
            Akram, at Karyashala, spearheads the company’s technological innovation. With a deep expertise in cutting-edge technologies, he ensures that Karyashala stays at the forefront of the industry, driving technical excellence and delivering robust solutions.

</p>
            <a href="https://www.linkedin.com/in/itsmak/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
            </a>
          </div>
          <div className="member flex flex-col items-center text-center">
            <img src="https://media.licdn.com/dms/image/v2/D5635AQFLdtXGhtMfbA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1724066905550?e=1725084000&v=beta&t=gO36oJPDMM7NhedWrOC6A71ULcnIittICGs_vkjDsiw" alt="Abhinay Agrawal" className="w-32 h-32 rounded-full mb-4 object-cover" />
            <h3 className="text-2xl font-bold">Abhinay Agrawal</h3>
            <p className="text-lg text-gray-500">Co-Founder </p>
            <p className="text-base leading-relaxed mb-4">
            Abhinay, the young and visionary leader of Karyashala, leads the company with a focus on innovation and strategic growth. His dynamic leadership and commitment to excellence are driving Karyashala's success and shaping its future in the industry.                       </p>
            <a href="https://www.linkedin.com/in/abhinay-agrawal-3841371a4/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
            </a>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials mb-12">
        <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
        <div className="testimonial mb-6">
          <p className="text-xl italic">"Karyashala helped me find the perfect job. Their platform is intuitive, and their support is outstanding!"</p>
          <p className="text-lg text-gray-500 mt-2">— Aditya, Software Engineer</p>
        </div>
        <div className="testimonial mb-6">
          <p className="text-xl italic">"The training programs at Karyashala are top-notch. I gained the skills I needed to advance in my career."</p>
          <p className="text-lg text-gray-500 mt-2">— Shivam, Data Scientist</p>
        </div>
        {/* Add more testimonials as needed */}
      </section>

      {/* Call to Action */}
      <p className="text-lg leading-relaxed">
        Join us at Karyashala and take the next step towards a brighter future, where opportunity meets preparation.
      </p>
    </div>
  );
};

export default AboutPage;
