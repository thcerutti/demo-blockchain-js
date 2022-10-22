import React from "react";

export const PropertyNegotiation = () => {
  return (
    <>
      <div>
        <div>
          <h3>Vendedor ID</h3>
          <input type="text" id="seller-id" />
          <button>Usar conta atual</button>
        </div>
        <div>
          <h3>Comprador ID</h3>
          <input type="text" id="buyer-id" />
          <button>Usar conta atual</button>
        </div>
        <div>
          <h3>Tipo do imóvel</h3>
          <select name="" id="property-type">
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Terreno</option>
            <option>Sitio</option>
          </select>
        </div>
        <div>
          <h3>Valor negociado</h3>
          <input type="number" id="value" />
        </div>
        <div>
          <h3>Data da negociação</h3>
          <input type="datetime-local" id="negotiation-date" />
        </div>
      </div>
      <div>
        <h3>Dados do contrato</h3>
        <textarea id="contract-raw-data" cols="30" rows="10" readOnly value={'some value'}></textarea>
      </div>
      <button className="btn btn-primary">Registrar</button>
    </>
  );
};
