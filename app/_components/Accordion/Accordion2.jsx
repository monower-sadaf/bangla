import React, { useState } from "react";

const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick,
  active,
  setTab,
  preTab,
}) => (
  <div
    className={`border border-gray-300 px-2 hover:bg-primary transition-all duration-500  py-1 rounded-sm w-full text-white ${
      active ? "bg-primary" : "bg-primary/50"
    }`}
  >
    <div
      className="cursor-pointer flex justify-between items-center"
      onClick={onClick}
    >
      <h2 className="">{title}</h2>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && (
      <div className="p-4">
        <ul>
          {children.map((child, index) => (
            <li onClick={() => setTab(preTab + index + 1)} key={index} className="mb-2">
              <a href={child.href} className={``}>
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Accordion2 = ({ items, active, setTab, preTab }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          // children={item.children}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
          active={active}
          setTab={setTab}
          preTab={preTab}
        >
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion2;
