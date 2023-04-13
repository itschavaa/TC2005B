
SELECT SUM(e.cantidad) AS 'Total entregados', SUM((e.cantidad * m.precio) * (100 + m.PorcentajeImpuesto) / 100) AS 'Importe total'
FROM entregan e
    INNER JOIN materiales m ON e.clave = m.clave
WHERE e.Fecha BETWEEN '1997-01-01' AND '1997-12-31';



SELECT p.RazonSocial, SUM(cantidad) AS 'Entregas', SUM((e.cantidad * m.precio) * (100 + m.PorcentajeImpuesto) / 100) AS 'Importe total'
FROM (proveedores p
   INNER JOIN entregan e ON p.RFC = e.RFC)
   INNER JOIN materiales m ON m.clave = e.clave

GROUP BY p.RFC;



SELECT m.clave, m.descripcion, SUM(e.cantidad) AS 'Entregas', MIN(e.cantidad) AS 'Entrega mínima', MAX(e.cantidad) AS 'Entrega máxima', SUM((e.cantidad * m.precio) * (100 + m.PorcentajeImpuesto) / 100) AS 'Importe total' 
FROM entregan e
INNER JOIN materiales m ON m.clave = e.clave
GROUP BY m.clave
HAVING AVG(e.cantidad) > 400;




SELECT p.RazonSocial, AVG(e.cantidad) AS 'Entregas promedio', m.clave, m.descripcion
FROM (proveedores p
    INNER JOIN entregan e ON p.RFC = e.RFC)
    INNER JOIN materiales m ON m.clave = e.clave
GROUP BY p.rfc, m.clave
HAVING AVG(e.cantidad) >= 500;



SELECT p.RazonSocial, AVG(e.cantidad) AS 'Entregas promedio', m.clave, m.descripcion
FROM (proveedores p
    INNER JOIN entregan e ON p.RFC = e.RFC)
    INNER JOIN materiales m ON m.clave = e.clave
GROUP BY p.rfc, m.clave
HAVING AVG(e.cantidad) < 370 OR AVG(e.cantidad) > 450;




INSERT INTO materiales (clave, descripcion, precio, impuesto, PorcentajeImpuesto) VALUES
(2001, 'oro', 36454.8, 3645.48, 3.14),
(2002, 'silicio', 1400, 140, 1.2),
(2003, 'bronce', 3000, 300, 1),
(2004, 'tungsteno', 1200, 120, 0.5),
(2005, 'titanio', 4800, 480, 2.08);


SELECT clave, descripcion
FROM materiales
WHERE clave NOT IN (SELECT clave
                    FROM entregan);



SELECT RazonSocial 
FROM proveedores
WHERE rfc IN (SELECT p.rfc
              FROM (proveedores p
              INNER JOIN entregan e ON e.rfc = p.rfc)
              INNER JOIN proyectos pr ON pr.numero = e.numero
              WHERE pr.Denominacion = 'Vamos México')
AND rfc IN (SELECT p.rfc FROM (proveedores p
              INNER JOIN entregan e ON e.rfc = p.rfc)
              INNER JOIN proyectos pr ON pr.numero = e.numero
              WHERE pr.Denominacion = 'Querétaro Limpio');



SELECT descripcion
FROM materiales
WHERE clave NOT IN (SELECT m.clave
                    FROM (materiales m
                    INNER JOIN entregan e ON e.clave = m.clave) 
                    INNER JOIN proyectos p ON e.numero = p.numero
                    WHERE p.denominacion  = 'CIT Yucatán')
GROUP BY clave;


SELECT p.RazonSocial, AVG(e.cantidad) AS 'Entregas Promedio'
FROM proveedores p
INNER JOIN entregan e ON e.RFC = p.RFC
GROUP BY p.RazonSocial
HAVING AVG(e.cantidad) > (SELECT AVG(e.cantidad) 
                          FROM proveedores p
                          INNER JOIN entregan e ON e.RFC = p.RFC
                           WHERE p.RFC = 'VAGO780901');


SELECT p.rfc, p.RazonSocial
FROM (proveedores p
    INNER JOIN entregan e ON p.rfc = e.rfc)
    INNER JOIN proyectos pr ON e.numero = pr.numero
WHERE pr.denominacion = 'Infonavit Durango'
    AND (SELECT SUM(e.cantidad) 
        FROM entregan e
        INNER JOIN proveedores pr ON pr.RFC = e.RFC
        WHERE e.fecha BETWEEN '2000-01-01' AND '2000-12-31'
        and pr.rfc = p.rfc) 
        >
        (SELECT SUM(e.cantidad)
         FROM entregan e
         INNER JOIN proveedores pr ON pr.rfc = e.rfc
         WHERE e.fecha BETWEEN '2001-01-01' AND '2001-12-31'
         AND pr.rfc = p.rfc)
GROUP BY p.rfc; 