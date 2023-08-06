## ETECSA SDK

SDK para integraciones de aplicaciones de ETECSA, el paquete es llamado `esdk`.

## Table de contenidos

-   [Estructura de modulos](#estructura-de-modulos)
-   [Instalacion del paquete](#instalacion-del-paquete)
-   [Modulo comercial](#modulo-commercial)
-   [Modulo payment](#modulo-payment)
-   [Modulo util](#modulo-util)

## Estructura de modulos

-   Los modulos estan conformados de la siguiente manera:

    ```bash
    -esdk
     --commercial
        ---ecrm
     --payment
        ---transfermovil
     --util
        ---apidevice
    ```

## Instalacion del paquete

Debe instalarse ejecutando en el ambiente virtual o con la version de python deseada utilizando el gestor de paquetes pip de la siguiente manera:
`pip install esdk`

## Modulo commercial

El modulo comercial esta conformado por las aplicaciones comerciales de la empresa, hasta el momento se cuenta solamente con la integracion con ecrm.

```python
Ejemplo de validacion de servicios en ecrm

from esdk.commercial.ecrm import APICredentials,APIOperations,APIConstants,ServiceToValidate,ServiceToPay

credential = APICredentials("username", "password")

service = ServiceToValidate("nauta", APIConstants.SERVICE_TYPE_IDENTIFICATOR_NAUTA)
service1 = ServiceToValidate("number", APIConstants.SERVICE_TYPE_IDENTIFICATOR_INVOICE)
service2 = ServiceToValidate("propia", APIConstants.SERVICE_TYPE_IDENTIFICATOR_PROPIA)

lst_services = [service.get_service(),service1.get_service(),service2.get_service()]

operation = APIOperations(credential)

operation.servicesvalidate(lst_services)

```

```python
Ejemplo de pago de servicios

from esdk.commercial.ecrm import APICredentials,APIOperations,APIConstants,ServiceToValidate,ServiceToPay

credential = APICredentials("username", "password")

service = ServiceToPay("acc1",APIConstants.SERVICE_TYPE_IDENTIFICATOR_INVOICE,"number", 10)
service1 = ServiceToPay("acc2",APIConstants.SERVICE_TYPE_IDENTIFICATOR_INVOICE,"number", 10)
service2 = ServiceToPay("acc3",APIConstants.SERVICE_TYPE_IDENTIFICATOR_INVOICE,"number", 10)


lst_services = [service.get_service(),service1.get_service(),service2.get_service()]

operation = APIOperations(credential)

operation.servicespayment(lst_services, "id","source","pm","cup")
```

## Modulo payment

El modulo payment esta conformado por las pasarelas de pago empleadas en el pais, hasta el momento se cuenta solamente con la integracion con transfermovil.

```python
from esdk.payment.transfer_movil import APICredentials,APIPayload,APIPayment

credential = APICredentials("username", "source","seed")
payload = APIPayload(10,'currency','id','source','url')

payment = APIPayment()
payment.charge(credential,payload)
```

## Modulo util

El modulo util esta conformado por conjunto de funciones, hasta el momento se cuenta solamente con obtener los datos del agente de usuario de la peticion http.

```python
from esdk.util.api_device import APIDevice

api_device = APIDevice('user-agent')
device = api_device.getdevice()
```
