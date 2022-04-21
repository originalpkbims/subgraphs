import { BatchCreated } from "../generated/mintmoss/mintmoss"
import { toDecimal } from './utils/Decimals'
import { loadOrCreateTransaction } from './utils/Transactions'
import {Batch} from "../generated/schema";

export function handleBatchCreated(event: BatchCreated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let transaction = loadOrCreateTransaction(event.transaction, event.block)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand

  let id = transaction.timestamp.toString() + event.params.serialNumber

  let batch = Batch.load(id)
  if (batch == null) {
      batch = new Batch(id)
      batch.serialNumber = event.params.serialNumber
      batch.projectID = event.params.projectId
      batch.vintage = event.params.vintage
      batch.creditType = event.params.creditType
      batch.value = toDecimal(event.params.units, 18)
      batch.tokenAddress = event.params.token.toHex()
      batch.broker = event.params.broker.toHex()
      batch.timestamp = transaction.timestamp
      batch.transaction = transaction.id
      
  }

  batch.save()
}
