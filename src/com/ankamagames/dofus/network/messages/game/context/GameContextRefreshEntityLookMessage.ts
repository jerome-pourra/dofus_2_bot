import { EntityLook } from "./../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextRefreshEntityLookMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7865;

	public id: number = 0;
	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
    }

    public getMessageId()
    {
        return GameContextRefreshEntityLookMessage.protocolId;
    }

    public initGameContextRefreshEntityLookMessage(id: number = 0, look: EntityLook = null): GameContextRefreshEntityLookMessage
    {
        this.id = id;
        this.look = look;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameContextRefreshEntityLookMessage(output);
    }

    public serializeAs_GameContextRefreshEntityLookMessage(output: ICustomDataOutput)
    {
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        this.look.serializeAs_EntityLook(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextRefreshEntityLookMessage(input);
    }

    private deserializeAs_GameContextRefreshEntityLookMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of GameContextRefreshEntityLookMessage.id.");
        }
    }

}