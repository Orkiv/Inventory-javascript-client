# InventoryClient.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **String** | Order ID | [optional] 
**infoEmail** | **String** | Customer email | [optional] 
**infoFirst** | **String** | Customer first name | [optional] 
**infoLast** | **String** | Customer last name | [optional] 
**phone** | **String** | Customer phone number | [optional] 
**shipset** | **Boolean** | Customer billing address matches shipping address | [optional] 
**infoAdr1** | **String** | Customer billing address line &#39;1&#39; | [optional] 
**infoAdr2** | **String** | Customer billing address line &#39;2&#39; | [optional] 
**infoCty** | **String** | Customer billing city | [optional] 
**infoZip** | **String** | Customer billing zip code | [optional] 
**state** | **String** | Customer billing state | [optional] 
**infoSadr1** | **String** | Customer shipping address line &#39;1&#39; | [optional] 
**infoSadr2** | **String** | Customer shipping address line &#39;2&#39; | [optional] 
**infoScty** | **String** | Customer shipping city | [optional] 
**infoSzip** | **String** | Customer shipping zip code | [optional] 
**sstate** | **String** | Customer shipping state | [optional] 
**taxAmount** | **Number** | Tax amount in hundreds. Must divide by &#39;100&#39; for USD value | [optional] 
**shippingAmount** | **Number** | Shipping total in USD | [optional] 
**amountTotal** | **Number** | Checkout total in USD | [optional] 
**itemIDs** | **[String]** | Array of items purchased at checkout | [optional] 


