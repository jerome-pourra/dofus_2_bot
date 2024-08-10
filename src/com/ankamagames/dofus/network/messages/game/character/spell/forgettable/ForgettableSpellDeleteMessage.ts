import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ForgettableSpellDeleteMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4353;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public reason: number = 0;
	public spells: Array<number>;

    public constructor()
    {
        super();
        this.spells = Array<number>();
    }

    public getMessageId()
    {
        return ForgettableSpellDeleteMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ForgettableSpellDeleteMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ForgettableSpellDeleteMessage.endpointServer;
    }

    public initForgettableSpellDeleteMessage(reason: number = 0, spells: Array<number> = null): ForgettableSpellDeleteMessage
    {
        this.reason = reason;
        this.spells = spells;
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
        this.serializeAs_ForgettableSpellDeleteMessage(output);
    }

    public serializeAs_ForgettableSpellDeleteMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
        output.writeShort(this.spells.length);
        for(var _i2: number = 0; _i2 < this.spells.length; _i2++)
        {
            if(this.spells[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.spells[_i2] + ") on element 2 (starting at 1) of spells.");
            }
            output.writeInt(this.spells[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ForgettableSpellDeleteMessage(input);
    }

    private deserializeAs_ForgettableSpellDeleteMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._reasonFunc(input);
        let _spellsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _spellsLen; _i2++)
        {
            _val2 = input.readInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of spells.");
            }
            this.spells.push(_val2);
        }
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of ForgettableSpellDeleteMessage.reason.");
        }
    }

}