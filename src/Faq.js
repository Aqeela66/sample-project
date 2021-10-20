import React from 'react'

const Faq = () => {
    const faqInfo=[
        {faq:"FAQ1", id:"q_1", value:"question1"},
        {faq:"FAQ2", id:"q_2", value:"question2"},
        {faq:"FAQ3", id:"q_3", value:"question3"},
        {faq:"FAQ4", id:"q_4", value:"question4"},
    ];
    const FaqRender=(faqValue,index)=>{
        return(
            
<div class="accordion  accordion-flush " id="accordionFlushExample">
  <div class="accordion-item mb-4 border border-primary">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${faqValue.id}`} aria-expanded="false" aria-controls="flush-collapseOne">
       {faqValue.faq}
      </button>
    </h2>
    <div id={faqValue.id} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Are a NFT creator who is struggling to create multiple iteration of yourart?  is it costly to your arts.</div>
    </div>
  </div>
  </div>

            
        )
    }
    return (
     <>
     <div className="container faq-section mb-5">
     <div class="wrapper bg-transparent rounded ">
    <div class="text-center mb-5 faq-heading">Frequently asked questions</div>
   {faqInfo.map(FaqRender)}
   </div>
   <div/>
</div>
     </>
    )
}

export default Faq