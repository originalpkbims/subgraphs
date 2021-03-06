// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BatchCreated extends ethereum.Event {
  get params(): BatchCreated__Params {
    return new BatchCreated__Params(this);
  }
}

export class BatchCreated__Params {
  _event: BatchCreated;

  constructor(event: BatchCreated) {
    this._event = event;
  }

  get serialNumber(): string {
    return this._event.parameters[0].value.toString();
  }

  get projectId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get vintage(): string {
    return this._event.parameters[2].value.toString();
  }

  get creditType(): string {
    return this._event.parameters[3].value.toString();
  }

  get units(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get broker(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get certifier(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class BatchUpdated extends ethereum.Event {
  get params(): BatchUpdated__Params {
    return new BatchUpdated__Params(this);
  }
}

export class BatchUpdated__Params {
  _event: BatchUpdated;

  constructor(event: BatchUpdated) {
    this._event = event;
  }

  get serialNumber(): string {
    return this._event.parameters[0].value.toString();
  }

  get projectId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get vintage(): string {
    return this._event.parameters[2].value.toString();
  }

  get creditType(): string {
    return this._event.parameters[3].value.toString();
  }

  get units(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get broker(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get certifier(): Address {
    return this._event.parameters[7].value.toAddress();
  }
}

export class ProjectCreated extends ethereum.Event {
  get params(): ProjectCreated__Params {
    return new ProjectCreated__Params(this);
  }
}

export class ProjectCreated__Params {
  _event: ProjectCreated;

  constructor(event: ProjectCreated) {
    this._event = event;
  }

  get projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get projectType(): string {
    return this._event.parameters[2].value.toString();
  }

  get certifications(): string {
    return this._event.parameters[3].value.toString();
  }

  get certifier(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class ProjectUpdated extends ethereum.Event {
  get params(): ProjectUpdated__Params {
    return new ProjectUpdated__Params(this);
  }
}

export class ProjectUpdated__Params {
  _event: ProjectUpdated;

  constructor(event: ProjectUpdated) {
    this._event = event;
  }

  get projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get projectType(): string {
    return this._event.parameters[2].value.toString();
  }

  get certifications(): string {
    return this._event.parameters[3].value.toString();
  }

  get certifier(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class mintmoss__batchesResult {
  value0: string;
  value1: BigInt;
  value2: string;
  value3: string;
  value4: BigInt;
  value5: Address;
  value6: Address;
  value7: Bytes;
  value8: boolean;

  constructor(
    value0: string,
    value1: BigInt,
    value2: string,
    value3: string,
    value4: BigInt,
    value5: Address,
    value6: Address,
    value7: Bytes,
    value8: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromFixedBytes(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    return map;
  }
}

export class mintmoss__projectsResult {
  value0: string;
  value1: string;
  value2: string;
  value3: boolean;

  constructor(value0: string, value1: string, value2: string, value3: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class mintmoss extends ethereum.SmartContract {
  static bind(address: Address): mintmoss {
    return new mintmoss("mintmoss", address);
  }

  CERTIFIER_ROLE(): Bytes {
    let result = super.call("CERTIFIER_ROLE", "CERTIFIER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CERTIFIER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CERTIFIER_ROLE",
      "CERTIFIER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  batches(param0: string): mintmoss__batchesResult {
    let result = super.call(
      "batches",
      "batches(string):(string,uint256,string,string,uint256,address,address,bytes32,bool)",
      [ethereum.Value.fromString(param0)]
    );

    return new mintmoss__batchesResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toAddress(),
      result[7].toBytes(),
      result[8].toBoolean()
    );
  }

  try_batches(param0: string): ethereum.CallResult<mintmoss__batchesResult> {
    let result = super.tryCall(
      "batches",
      "batches(string):(string,uint256,string,string,uint256,address,address,bytes32,bool)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new mintmoss__batchesResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toAddress(),
        value[7].toBytes(),
        value[8].toBoolean()
      )
    );
  }

  carbonInventoryControl(): Address {
    let result = super.call(
      "carbonInventoryControl",
      "carbonInventoryControl():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_carbonInventoryControl(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "carbonInventoryControl",
      "carbonInventoryControl():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  projects(param0: BigInt): mintmoss__projectsResult {
    let result = super.call(
      "projects",
      "projects(uint256):(string,string,string,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new mintmoss__projectsResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toBoolean()
    );
  }

  try_projects(param0: BigInt): ethereum.CallResult<mintmoss__projectsResult> {
    let result = super.tryCall(
      "projects",
      "projects(uint256):(string,string,string,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new mintmoss__projectsResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toBoolean()
      )
    );
  }

  registerOnlyMode(): boolean {
    let result = super.call(
      "registerOnlyMode",
      "registerOnlyMode():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_registerOnlyMode(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "registerOnlyMode",
      "registerOnlyMode():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _carbonInventoryControl(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateBatchCall extends ethereum.Call {
  get inputs(): CreateBatchCall__Inputs {
    return new CreateBatchCall__Inputs(this);
  }

  get outputs(): CreateBatchCall__Outputs {
    return new CreateBatchCall__Outputs(this);
  }
}

export class CreateBatchCall__Inputs {
  _call: CreateBatchCall;

  constructor(call: CreateBatchCall) {
    this._call = call;
  }

  get _serialNumber(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _projectId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _vintage(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _creditType(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _units(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _broker(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _originalTx(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class CreateBatchCall__Outputs {
  _call: CreateBatchCall;

  constructor(call: CreateBatchCall) {
    this._call = call;
  }
}

export class CreateProjectCall extends ethereum.Call {
  get inputs(): CreateProjectCall__Inputs {
    return new CreateProjectCall__Inputs(this);
  }

  get outputs(): CreateProjectCall__Outputs {
    return new CreateProjectCall__Outputs(this);
  }
}

export class CreateProjectCall__Inputs {
  _call: CreateProjectCall;

  constructor(call: CreateProjectCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _type(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _certifications(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreateProjectCall__Outputs {
  _call: CreateProjectCall;

  constructor(call: CreateProjectCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetRegistryOnlyModeCall extends ethereum.Call {
  get inputs(): SetRegistryOnlyModeCall__Inputs {
    return new SetRegistryOnlyModeCall__Inputs(this);
  }

  get outputs(): SetRegistryOnlyModeCall__Outputs {
    return new SetRegistryOnlyModeCall__Outputs(this);
  }
}

export class SetRegistryOnlyModeCall__Inputs {
  _call: SetRegistryOnlyModeCall;

  constructor(call: SetRegistryOnlyModeCall) {
    this._call = call;
  }

  get _mode(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetRegistryOnlyModeCall__Outputs {
  _call: SetRegistryOnlyModeCall;

  constructor(call: SetRegistryOnlyModeCall) {
    this._call = call;
  }
}

export class UpdateBatchCall extends ethereum.Call {
  get inputs(): UpdateBatchCall__Inputs {
    return new UpdateBatchCall__Inputs(this);
  }

  get outputs(): UpdateBatchCall__Outputs {
    return new UpdateBatchCall__Outputs(this);
  }
}

export class UpdateBatchCall__Inputs {
  _call: UpdateBatchCall;

  constructor(call: UpdateBatchCall) {
    this._call = call;
  }

  get _serialNumber(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _projectId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _vintage(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _creditType(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _units(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _broker(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _originalTx(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }

  get _mintTokens(): boolean {
    return this._call.inputValues[8].value.toBoolean();
  }
}

export class UpdateBatchCall__Outputs {
  _call: UpdateBatchCall;

  constructor(call: UpdateBatchCall) {
    this._call = call;
  }
}

export class UpdateInventoryControlCall extends ethereum.Call {
  get inputs(): UpdateInventoryControlCall__Inputs {
    return new UpdateInventoryControlCall__Inputs(this);
  }

  get outputs(): UpdateInventoryControlCall__Outputs {
    return new UpdateInventoryControlCall__Outputs(this);
  }
}

export class UpdateInventoryControlCall__Inputs {
  _call: UpdateInventoryControlCall;

  constructor(call: UpdateInventoryControlCall) {
    this._call = call;
  }

  get _newAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateInventoryControlCall__Outputs {
  _call: UpdateInventoryControlCall;

  constructor(call: UpdateInventoryControlCall) {
    this._call = call;
  }
}

export class UpdateProjectCall extends ethereum.Call {
  get inputs(): UpdateProjectCall__Inputs {
    return new UpdateProjectCall__Inputs(this);
  }

  get outputs(): UpdateProjectCall__Outputs {
    return new UpdateProjectCall__Outputs(this);
  }
}

export class UpdateProjectCall__Inputs {
  _call: UpdateProjectCall;

  constructor(call: UpdateProjectCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _type(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _certifications(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class UpdateProjectCall__Outputs {
  _call: UpdateProjectCall;

  constructor(call: UpdateProjectCall) {
    this._call = call;
  }
}
