import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterSelectedForceMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4050;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterSelectedForceMessage.protocolId;
    }

    public isEndpointClient()
    {
        return CharacterSelectedForceMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return CharacterSelectedForceMessage.endpointServer;
    }

    public initCharacterSelectedForceMessage(id: number = 0): CharacterSelectedForceMessage
    {
        this.id = id;
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
        this.serializeAs_CharacterSelectedForceMessage(output);
    }

    public serializeAs_CharacterSelectedForceMessage(output: ICustomDataOutput)
    {
        if(this.id < 1 || this.id > 2147483647)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeInt(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterSelectedForceMessage(input);
    }

    private deserializeAs_CharacterSelectedForceMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readInt();
        if(this.id < 1 || this.id > 2147483647)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of CharacterSelectedForceMessage.id.");
        }
    }

}