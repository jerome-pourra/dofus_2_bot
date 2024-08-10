import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightVanishMessage extends AbstractGameActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5071;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public targetId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionFightVanishMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionFightVanishMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionFightVanishMessage.endpointServer;
    }

    public initGameActionFightVanishMessage(actionId: number = 0, sourceId: number = 0, targetId: number = 0): GameActionFightVanishMessage
    {
        super.initAbstractGameActionMessage(actionId,sourceId);
        this.targetId = targetId;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameActionFightVanishMessage(output);
    }

    public serializeAs_GameActionFightVanishMessage(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractGameActionMessage(output);
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionFightVanishMessage(input);
    }

    private deserializeAs_GameActionFightVanishMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightVanishMessage.targetId.");
        }
    }

}